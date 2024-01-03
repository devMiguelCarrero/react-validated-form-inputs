export class ParagraphVariants {
  variant: string;

  constructor(variant: string) {
    this.variant = variant;
  }

  getClasses(): string {
    switch (this.variant) {
      case 'highlighted':
        return 'paragraph--highlighted text-lg md:text-[28px] xl:text-[35px] leading-normal';

      case 'medium':
        return 'paragraph--high text-sm md:text-[22px] leading-[1.3]';

      case 'high':
        return 'paragraph--high text-lg md:text-[28px] leading-[1.3]';

      case 'high-responsive':
        return 'text-md md:text-[28px] leading-[1.3]';

      case 'feature':
        return 'paragraph--feature leading-[1.8] text-xl';

      case 'bold':
        return 'paragraph--feature leading-normal font-signika-bold';

      case 'highlighted-bold':
        return 'paragraph--highlighted-bold text-lg md:text-[28px] xl:text-[35px] leading-normal font-signika-bold';

      case 'description':
        return 'paragraph--description text-[0.8rem] md:text-[1.2rem] leading-none md:leading-[1.8]';

      default:
        return '';
    }
  }
}
