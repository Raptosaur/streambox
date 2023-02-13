import { createSrtPipeline } from "./helpers";
import { pipelines } from "./pipelines";

const pipeline = createSrtPipeline(pipelines[0], "srt://127.0.0.1:1234");

pipeline.play();
