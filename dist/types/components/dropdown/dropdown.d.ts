import { EventEmitter } from '../../stencil-public-runtime';
import { SomeInterface } from 'src/types/type';
export declare class Dropdown {
  title: string;
  toggle: boolean;
  someType: SomeInterface;
  onToggle: EventEmitter;
  render(): any;
  toggleClick(): void;
}
