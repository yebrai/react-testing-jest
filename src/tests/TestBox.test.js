
import { render, screen, fireEvent } from "@testing-library/react"
import TextBox from "../../components/TextBox"

//Testing components

describe('TextBox component', () => {

    //beforeEach ejecuta su funcion anonima antes de cada test.

    let article;
    let button
    beforeEach(() => {
        render(<TextBox/>)
        article = screen.getByRole('article', { name: 'párrafo principal'})
        button = screen.getByRole('button', { name: 'Pulsa para modificar'})
    })

    test('la caja de texto se encuentra en el documento', () => {
        expect(article).toBeInTheDocument()
    })

    test('la caja con el texto tiene un color inicial', () => {
        expect(article).toHaveStyle({
            backgroundColor: 'indigo'
        })
    })

    test('si al pulsar el boton cambia el color de fondo', () => {
        fireEvent.click(button)
        expect(article).toHaveStyle({
            backgroundColor: 'tomato'
        })
    })

} )