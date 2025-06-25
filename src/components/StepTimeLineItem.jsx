import { motion } from 'framer-motion';

const StepTimelineItem = ({ idx, icon, color, title, description, bullets }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-10"
    >
      {/* Timeline line */}
      <span className="absolute left-4 top-0 h-full w-px bg-muted"></span>

      {/* Timeline circle */}
      <span className={`absolute left-0 top-1 w-8 h-8 ${color} rounded-full flex items-center justify-center shadow-md`}>
        {icon}
      </span>

      {/* Step content box */}
      <div className="bg-card rounded-lg shadow-sm p-5">
        <h3 className="text-lg font-bold mb-1">
          {idx + 1}. {title}
        </h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default StepTimelineItem;
