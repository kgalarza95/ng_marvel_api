import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiFy'
})
export class EmojiFyPipe implements PipeTransform {
  transform(value: string): string {
    const emojiMap: Record<string, string> = {
      'feliz': '😄',
      'triste': '😢',
      'enojado': '😠',
      'sorpresa': '😲'
    };

    Object.keys(emojiMap).forEach(key => {
      value = value.replace(new RegExp(key, 'gi'), emojiMap[key]);
    });

    return value;
  }

}
