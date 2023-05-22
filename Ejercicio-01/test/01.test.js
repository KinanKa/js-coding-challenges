const {
    nuevaString,
    nuevoBool,
    nuevoNum,
    nuevaResta,
    nuevaMultiplicacion,
    nuevoModulo,
} = require('../01.js');

describe("nuevaString",function(){
    it("La variable nuevaString debería tener alojada una string",function(){
        expect(typeof nuevaString).toBe('string');
    });
});


describe("nuevoBool",function(){
    it("La variable nuevoBool debería alojar un booleano",function(){
        expect(typeof nuevoBool).toBe('boolean');
    })

});

describe("nuevoNum",function(){
    it("La variable nuevoNum debería alojar un número",function(){
        expect(typeof nuevoNum).toBe('number');
    })

});

describe("nuevaResta",function(){
    it("La variable nuevaResta debería alojar un booleano",function(){
        expect(nuevaResta).toBe(true);
    })
});

describe("nuevaMultiplicación",function(){
    it("La variable nuevaMultiplicacion debería alojar un booleano",function(){
        expect(nuevaMultiplicacion).toBe(true);
    })
});

describe("nuevoModulo",function(){
    it("La variable nuevoModulo debería alojar un booleano",function(){
        expect(nuevoModulo).toBe(true);
    })
});
