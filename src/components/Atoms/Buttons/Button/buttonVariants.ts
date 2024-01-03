import classes from './button.module.scss';

export class ButtonVariants {
  variant: string;

  constructor(variant: string) {
    this.variant = variant;
  }

  getClasses(): string {
    switch (this.variant) {
      case 'light':
        return `${classes['wk-button--light']}`;

      case 'white':
        return `${classes['wk-button--white']}`;

      default:
        return '';
    }
  }
}
