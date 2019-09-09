import MockAdapter from "axios-mock-adapter";
import AuthApi from '../lib/auth';
import * as config from "../lib/config";

describe("", () => {
    it("should return an auth token", done => {
        let mock : MockAdapter;
        const auth = new AuthApi("fake", "fake");
        console.log(auth.fractalAxios.getUri())
        mock = new MockAdapter(auth.fractalAxios);
        const token = {};
        mock.onAny(`${config.authUrl}`, {}).reply(201, token);
        
        auth.createToken().then(resp => {
            console.log(resp);
            expect(resp.data).toEqual(token);
            done();
        }).catch(err => {
            console.log("ERROR");
            console.log(err);
        });
        
    });
});

