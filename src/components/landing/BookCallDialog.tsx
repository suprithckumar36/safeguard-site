import { useState, type ReactNode } from "react";
import { z } from "zod";
import { Calendar, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  email: z
    .string()
    .trim()
    .max(255, "Email is too long")
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
  preferred_time: z.string().trim().max(100).optional().or(z.literal("")),
  notes: z.string().trim().max(500, "Notes are too long").optional().or(z.literal("")),
});

interface BookCallDialogProps {
  children: ReactNode;
}

const BookCallDialog = ({ children }: BookCallDialogProps) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    preferred_time: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = bookingSchema.safeParse(form);
    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? "Invalid input";
      toast.error(firstError);
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("call_bookings").insert({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email || null,
      preferred_time: parsed.data.preferred_time || null,
      notes: parsed.data.notes || null,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Couldn't submit your request. Please try again.");
      return;
    }

    toast.success("We've got it! An advisor will reach out shortly.");
    setForm({ name: "", phone: "", email: "", preferred_time: "", notes: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[92%] max-w-md mx-auto rounded-xl my-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Calendar className="h-5 w-5 text-primary" />
            Book a free call
          </DialogTitle>
          <DialogDescription>
            Share a few details and an IRDAI-certified advisor will reach out within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-2 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bc-name">Name *</Label>
            <Input
              id="bc-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              maxLength={100}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bc-phone">Phone *</Label>
            <Input
              id="bc-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 98765 43210"
              maxLength={20}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bc-email">Email (optional)</Label>
            <Input
              id="bc-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              maxLength={255}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bc-time">Preferred time (optional)</Label>
            <Input
              id="bc-time"
              value={form.preferred_time}
              onChange={(e) => setForm({ ...form, preferred_time: e.target.value })}
              placeholder="e.g. Weekdays after 6pm"
              maxLength={100}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bc-notes">Anything else? (optional)</Label>
            <Textarea
              id="bc-notes"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Tell us what you're looking for"
              maxLength={500}
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Request my free call"
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            No cost. No spam. No obligation.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallDialog;
