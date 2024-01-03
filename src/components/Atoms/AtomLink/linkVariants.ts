export class LinkVariants {
  variant: string;

  constructor(variant: string) {
    this.variant = variant;
  }

  getClasses(): string {
    switch (this.variant) {
      case 'highlighted':
        return 'text-lg md:text-[28px] leading-normal underline hover:no-underline font-signika-medium';

      default:
        return 'hover:underline';
    }
  }
}
