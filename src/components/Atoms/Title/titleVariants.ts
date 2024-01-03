export class TitleVariants {
  variant: string;

  constructor(variant: string) {
    this.variant = variant;
  }

  getClasses(): string {
    switch (this.variant) {
      case 'colossal':
        return 'text-[2.5rem] md:text-[6rem] xl:text-[10rem] font-signika-bold leading-[1.2]';

      case 'massive':
        return 'text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-signika-bold leading-[1.2]';

      case 'medium':
        return 'text-[1.2rem] md:text-[2.5rem] font-signika-bold leading-none';

      case 'subtitle':
        return 'text-[2rem] md:text-[4rem] font-signika-bold leading-[1.2]';

      case 'light':
        return 'text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-signika-light leading-[1.2]';

      case 'light-responsive':
        return 'text-[2.3rem] md:text-[4rem] lg:text-[4rem] font-signika-light leading-[1.2]';

      case 'light-medium':
        return 'text-[2rem] md:text-[2rem] lg:text-[2.5rem] font-signika-light leading-[1.2]';

      case 'light-mini':
        return 'text-[1.2rem] md:text-[2rem] lg:text-[2.5rem] font-signika-light leading-[1.2]';

      case 'light-massive':
        return 'text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-signika-light leading-none';

      case 'heading-title':
        return 'text-[2.5rem] md:text-[5.5rem] font-signika-bold leading-[1.2]';

      case 'feature-title':
        return 'font-signika-bold text-lg md:text-2xl';

      case 'card-title':
        return 'font-signika-bold text-3xl';

      case 'offer-title':
        return 'font-signika-bold text-[1.1rem] md:text-xl lg:text-2xl mb-2 md:mb-0 leading-[1.2] md:leading-none';

      case 'big-regular':
        return 'text-[1.5rem] md:text-[2.5rem] lg:text-[3.6rem] font-signika-medium leading-[1.2]';

      case 'regular-responsive':
        return 'text-md md:text-2xl lg:text-3xl font-signika-medium';

      default:
        return 'text-xl md:text-2xl lg:text-3xl font-signika-medium';
    }
  }
}
