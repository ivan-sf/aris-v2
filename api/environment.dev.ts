import * as os from 'os';
51092
export class AppSettings {
    public static PORT = process.env.PORT || 3000;
    public static SERVER_ENVIRONMENT = `http://${AppSettings.getServerIpAddress()}:`
    public static API_ENDPOINT= AppSettings.SERVER_ENVIRONMENT+AppSettings.PORT+'/api/'

    public static TYPE = 'postgres'
    public static HOSTDB = 'be4careapiservices.postgres.database.azure.com'
    public static PORTDB = '5432'
    public static USERDB = 'agonzalez'
    public static PWDB = 'Gpsglobal2014'
    public static DB = 'b4care-api'


    private static getServerIpAddress(): string {
        console.log("this.PORTthis.PORTthis.PORTthis.PORTthis.PORTxxx",this.PORT)
        const interfaces = os.networkInterfaces();
        for (const iface of Object.values(interfaces)) {
            for (const alias of iface!) {
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
        console.log("this.PORTthis.PORTthis.PORTthis.PORTthis.PORTxxx",this.PORT)
        return 'localhost';
    }
}
