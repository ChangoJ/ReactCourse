describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById( id );

        expect( heroe ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });
    
});
