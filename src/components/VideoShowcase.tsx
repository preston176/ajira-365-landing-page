import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// Drop the YouTube video ID here when ready (e.g. "dQw4w9WgXcQ").
// While empty, the section renders a branded placeholder.
const YOUTUBE_VIDEO_ID = '_ZilkYaFLM4';

export const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // maxresdefault.jpg isn't generated for every video; fall back to
  // hqdefault.jpg (always present) if the high-res thumbnail 404s.
  const [thumbSrc, setThumbSrc] = useState(
    `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`
  );

  const hasVideo = YOUTUBE_VIDEO_ID.length > 0;

  return (
    <section id="demo" className="relative bg-paper py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            See it in action
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
            Three minutes. One walkthrough.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Watch how a real session works, from picking a role to running a
            mock interview and getting feedback in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-12 group relative"
        >
          {/* Glow behind the player */}
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-3xl opacity-50 blur-2xl"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgb(233 116 49 / 0.25), transparent 60%)',
            }}
          />

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-navy ring-1 ring-border shadow-card-lg">
            {hasVideo && isPlaying ? (
              <iframe
                title="Ajira 365 product demo"
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => hasVideo && setIsPlaying(true)}
                disabled={!hasVideo}
                className="absolute inset-0 flex items-center justify-center disabled:cursor-default"
                aria-label={hasVideo ? 'Play product demo' : 'Demo video coming soon'}
              >
                {/* Thumbnail facade — the iframe only mounts on click,
                    so the demo costs nothing until someone hits play. */}
                {hasVideo && (
                  <img
                    src={thumbSrc}
                    onError={() =>
                      setThumbSrc(
                        `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`
                      )
                    }
                    alt="Ajira 365 product demo preview"
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                  />
                )}

                {/* Navy gradient + soft warm glow when no video is set */}
                {!hasVideo && (
                  <>
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-hero-navy"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 30% 30%, rgb(233 116 49 / 0.20), transparent 50%), radial-gradient(circle at 80% 80%, rgb(255 255 255 / 0.08), transparent 50%)',
                      }}
                    />
                  </>
                )}

                {/* Play button, only animated when a video is wired up */}
                <span
                  className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-card-lg transition-transform ${
                    hasVideo ? 'group-hover:scale-110' : 'opacity-90'
                  }`}
                >
                  <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
                </span>

                {/* Caption */}
                {!hasVideo && (
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/80 ring-1 ring-white/15 backdrop-blur-sm">
                    Demo video coming soon
                  </span>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
