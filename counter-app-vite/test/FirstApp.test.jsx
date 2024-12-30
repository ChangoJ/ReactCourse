import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    test('Debe hacer match con el snapshot', () => {
       
        const title = 'Hola, soy Goku';
        const {container} = render(<FirstApp title={title} />);

        console.log(container);
        
        expect(container).toMatchSnapshot();

    });

    test('Se debe mostrar el titulo en el h1', () => {
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtitulo';
        const name = 'Soy un nombre';
        const {getByText} = render(<FirstApp title={title} subTitle={subTitle} name={name} />);

        expect(getByText(title)).toBeTruthy();
        expect(getByText(subTitle)).toBeTruthy();
        expect(getByText(name)).toBeTruthy();
    });
});