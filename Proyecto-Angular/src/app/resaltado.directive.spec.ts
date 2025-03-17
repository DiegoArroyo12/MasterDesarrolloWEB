import { ResaltadoDirective } from './resaltado.directive';

describe('ResaltadoDirective', () => {
  it('should create an instance', () => {
    const elRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new ResaltadoDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
