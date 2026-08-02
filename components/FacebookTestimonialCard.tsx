import { Globe, MoreHorizontal, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { initials, type FacebookTestimonial } from "@/lib/testimonials";

export function FacebookTestimonialCard({
  testimonial,
}: {
  testimonial: FacebookTestimonial;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${testimonial.avatarColor}`}
        >
          {initials(testimonial.name)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="flex items-center gap-1 text-xs text-ink/45">
            {testimonial.time}
            <Globe size={11} />
          </p>
        </div>
        <MoreHorizontal size={18} className="shrink-0 text-ink/40" />
      </div>

      <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/85">
        {testimonial.text}
      </p>

      <div className="mt-3 flex items-center gap-1.5 border-b border-ink/8 pb-3 text-xs text-ink/45">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-royal-blue">
          <ThumbsUp size={9} className="text-white" fill="currentColor" />
        </span>
        {testimonial.likes}
      </div>

      <div className="flex items-center justify-around pt-2 text-sm font-medium text-ink/50">
        <span className="flex items-center gap-1.5">
          <ThumbsUp size={15} />
          Like
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle size={15} />
          Comment
        </span>
        <span className="flex items-center gap-1.5">
          <Share2 size={15} />
          Share
        </span>
      </div>

      {testimonial.comments.length > 0 && (
        <div className="mt-3 flex flex-col gap-2 border-t border-ink/8 pt-3">
          {testimonial.comments.map((comment, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-mist text-[0.65rem] font-semibold text-ink/60">
                {initials(comment.name)}
              </div>
              <div className="rounded-2xl bg-slate-mist px-3 py-2">
                <p className="text-xs font-semibold text-ink">{comment.name}</p>
                <p className="text-xs leading-relaxed text-ink/75">
                  {comment.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
