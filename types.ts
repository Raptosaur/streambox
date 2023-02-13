export type StreamboxPipeline = {
  name: string;
  steps: string[];
  type: "generic" | "nvenc";
};
