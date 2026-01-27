import { motion } from "framer-motion";

export interface SuccessStory {
  brand: string;
  logo: string;
  highlight: string;
  highlightLabel: string;
  description: string;
  growth: string;
}

interface SuccessStoriesProps {
  title: string;
  subtitle: string;
  stories: SuccessStory[];
  brandColor: string;
}

const SuccessStories = ({ title, subtitle, stories, brandColor }: SuccessStoriesProps) => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              style={{ 
                ["--hover-border-color" as string]: `${brandColor}4D` // 30% opacity
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = brandColor + "4D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: brandColor }}
                >
                  <span className="text-white font-bold text-lg">{story.logo}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{story.brand}</h3>
                  <span 
                    className="text-sm font-medium"
                    style={{ color: brandColor }}
                  >
                    {story.growth}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <div 
                  className="text-3xl font-bold"
                  style={{ color: brandColor }}
                >
                  {story.highlight}
                </div>
                <div className="text-sm text-muted-foreground">{story.highlightLabel}</div>
              </div>
              <p className="text-muted-foreground text-sm">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
