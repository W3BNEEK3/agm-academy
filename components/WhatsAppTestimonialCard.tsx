import { CheckCheck, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react";
import { initials, type WhatsAppTestimonial } from "@/lib/testimonials";

export function WhatsAppTestimonialCard({
  testimonial,
}: {
  testimonial: WhatsAppTestimonial;
}) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 bg-[#075E54] px-3 py-3">
        <ChevronLeft size={20} className="shrink-0 text-white/80" />
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${testimonial.avatarColor}`}
        >
          {initials(testimonial.name)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            {testimonial.name}
          </p>
          <p className="text-xs text-white/60">online</p>
        </div>
        <div className="flex items-center gap-3 text-white/80">
          <Video size={17} />
          <Phone size={15} />
          <MoreVertical size={17} />
        </div>
      </div>

      <div
        className="flex flex-col gap-2 px-4 py-5"
        style={{ backgroundColor: "#E5DDD5" }}
      >
        {testimonial.messages.map((message, i) => (
          <div
            key={i}
            className={`flex ${message.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[82%] rounded-lg px-3 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.15)] ${
                message.from === "me" ? "bg-[#DCF8C6]" : "bg-white"
              }`}
            >
              <p className="text-[0.83rem] leading-relaxed text-ink">
                {message.text}
              </p>
              <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-ink/40">
                {message.time}
                {message.from === "me" && (
                  <CheckCheck size={13} className="text-sky-500" />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
