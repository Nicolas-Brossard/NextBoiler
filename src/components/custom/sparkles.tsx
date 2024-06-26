import { SparklesCore } from "../ui/sparkles";

export const Sparkles = () => {
  return (
    <div className="fixed inset-0 h-screen w-full">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={0.8}
        particleDensity={30}
        className="h-full w-full"
        particleColor="#f3e06a"
      />
    </div>
  );
};
