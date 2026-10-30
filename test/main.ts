export const documentTitle = (): string => document.title;

export const fromAsync: Promise<number[]> = Array.fromAsync([0]);

// @ts-expect-error
export const nullString: string = null;

// @ts-expect-error
export const indexedNumber: number = [0][0];

// @ts-expect-error
export enum NonErasableEnum {}

// @ts-expect-error
export const implicitReturn = (condition: boolean): number | undefined => {
  if (condition) {
    return 0;
  }
};

export const fallthroughCase = (value: number): void => {
  switch (value) {
    // @ts-expect-error
    case 0:
      console.log(value);
    default:
      console.log(value);
  }
};

class Base {
  public method(): void {}
}

export class ImplicitOverride extends Base {
  // @ts-expect-error
  public method(): void {}
}

// @ts-expect-error
const unusedLocal = 0;

// @ts-expect-error
export const unusedParameter = (value: number): void => {};
