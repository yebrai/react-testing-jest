import { titleCase } from "../../components/ProfileCard"
import { mayorDeEdad } from "../../components/ProfileCard"

//Unit testing

describe('funciones dentro del componente ProfileCard', () => {

    describe('titleCase', () => {
        test('debe retornar un string', () => {
            const result = titleCase('Un valor')
            expect(typeof result).toBe('string')
        })

        test('debe retornar string transformado', () => {
            expect(titleCase('en un lugar de la mancha')).toBe('En Un Lugar De La Mancha')
        })

        test('debe devolver un string vacio si recibe un string vacio', () => {
            expect(titleCase('')).toBe('')
        })
    })

})

describe('mayorDeEdad', () => {

    test('debe devolver un boolean', () => {
        expect(typeof mayorDeEdad(19)).toBe('boolean')
    })

    test('si es mayor de edad devuelve true', () => {
        expect(mayorDeEdad(34)).toBeTruthy()
    })

    test('si la edad es 18 debe devolver true', () => {
        expect(mayorDeEdad(18)).toBeTruthy()
    })

    test('si la edad es menor de 18 devulve false', () => {
        expect(mayorDeEdad(4)).toBeFalsy()
    })

    test('si la edad es negativa devuelve null', () => {
        expect(mayorDeEdad(-21)).toBeNull()
    })
})