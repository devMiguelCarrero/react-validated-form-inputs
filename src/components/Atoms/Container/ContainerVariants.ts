export class ContainerVariants {
  variant: string;

  constructor(variant: string) {
    this.variant = variant;
  }

  getClasses(): string {
    switch (this.variant) {
      case 'full':
        return 'w-full';

      case 'medium':
        return 'w-[1100px] px-[25px]';

      case 'long':
        return 'w-[1280px] px-[25px]';

      case 'extended':
        return 'w-[1550px] px-[25px]';

      case 'xl':
        return 'w-[1920px] px-[25px] md:px-[3rem] xl:px-[6rem] mx-auto';

      case 'no-padding':
        return 'px-0';

      case 'nav':
        return 'w-[1458px] px-[25px]';

      case 'wide':
        return 'w-full px-[25px] lg:px-[6rem] mx-auto';

      case 'compressed':
        return 'w-[700px] px-[25px]';

      default:
        return 'w-[1090px] px-[25px] md:px-[3rem] lg:px-[5.5rem]';
    }
  }
}
