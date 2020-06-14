import { IntrinsicTachyonsAttributes } from "./types";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DOMAttributes<T> extends IntrinsicTachyonsAttributes {}
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicAttributes extends IntrinsicTachyonsAttributes {}
  }
}
