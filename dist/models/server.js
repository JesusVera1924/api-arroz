"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//exportacion e rutas
const usuario_1 = __importDefault(require("../routes/usuario"));
const insumo_1 = __importDefault(require("../routes/insumo"));
const maquinaria_1 = __importDefault(require("../routes/maquinaria"));
const enfermedad_1 = __importDefault(require("../routes/enfermedad"));
const persona_1 = __importDefault(require("../routes/persona"));
const terreno_1 = __importDefault(require("../routes/terreno"));
const finca_1 = __importDefault(require("../routes/finca"));
const listinsumo_1 = __importDefault(require("../routes/listinsumo"));
const listpersonal_1 = __importDefault(require("../routes/listpersonal"));
const task_1 = __importDefault(require("../routes/task"));
const listtask_1 = __importDefault(require("../routes/listtask"));
const listmaquinarias_1 = __importDefault(require("../routes/listmaquinarias"));
const historial_1 = __importDefault(require("../routes/historial"));
const cronograma_1 = __importDefault(require("../routes/cronograma"));
const dwre_1 = __importDefault(require("../routes/dwre"));
const listcultivo_1 = __importDefault(require("../routes/listcultivo"));
const listerrenos_1 = __importDefault(require("../routes/listerrenos"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            enfermedad: '/api/enfermedades',
            insumo: '/api/insumos',
            maquinaria: '/api/maquinarias',
            terreno: '/api/terrenos',
            persona: '/api/personas',
            finca: '/api/fincas',
            listInsumo: '/api/listInsumo',
            listPersona: '/api/listPersonal',
            task: '/api/task',
            listMaquinarias: '/api/listmaquinarias',
            historial: '/api/historial',
            cronograma: '/api/cronograma',
            dwre: '/api/dwre',
            listtask: '/api/listtask',
            listcultivo: '/api/listcultivos',
            listterreno: '/api/listterreno'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online');
            }
            catch (e) {
                throw new Error();
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta pública
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default),
            this.app.use(this.apiPaths.enfermedad, enfermedad_1.default),
            this.app.use(this.apiPaths.insumo, insumo_1.default),
            this.app.use(this.apiPaths.maquinaria, maquinaria_1.default),
            this.app.use(this.apiPaths.terreno, terreno_1.default),
            this.app.use(this.apiPaths.persona, persona_1.default),
            this.app.use(this.apiPaths.finca, finca_1.default),
            this.app.use(this.apiPaths.listInsumo, listinsumo_1.default),
            this.app.use(this.apiPaths.listPersona, listpersonal_1.default),
            this.app.use(this.apiPaths.task, task_1.default),
            this.app.use(this.apiPaths.listMaquinarias, listmaquinarias_1.default),
            this.app.use(this.apiPaths.historial, historial_1.default),
            this.app.use(this.apiPaths.cronograma, cronograma_1.default),
            this.app.use(this.apiPaths.dwre, dwre_1.default),
            this.app.use(this.apiPaths.listtask, listtask_1.default),
            this.app.use(this.apiPaths.listcultivo, listcultivo_1.default),
            this.app.use(this.apiPaths.listterreno, listerrenos_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map