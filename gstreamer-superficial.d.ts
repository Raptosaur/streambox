declare module "gstreamer-superficial" {
  export class Pipeline {
    constructor(args: string);
    play: () => void;
    stop: () => void;
    pause: () => void;
    seek: (position: any, flags: any) => void;
    findChild: (position: any, flags?: any) => PipelineChild;
    pollBus: (messageCallback: (message: unknown) => void) => void;
  }

  export class PipelineChild {
    pull: (dataCallback: (data: unknown) => void) => void;
    [name: string]: unknown | undefined;
  }
}
