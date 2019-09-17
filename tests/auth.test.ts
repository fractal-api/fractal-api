import MockAdapter from "axios-mock-adapter";
import AuthApi from '../lib/auth';
import { FractalToken } from "../lib";

describe("", () => {
    it("should return an auth token", done => {
        let mock : MockAdapter;
        const auth = new AuthApi("fake", "fake");
        mock = new MockAdapter(auth.fractalAxios);
        const token : FractalToken = {
            accessToken: "aduvbno",
            expires: 1800,
            partnerId: "fake",
            partnerName: "fake",
            tokenType: "Bearer"
        };
        mock.onPost("").reply(201, token);
        auth.createToken().then(resp => {
            expect(resp.data).toEqual(token);
            done();
        });
    });
});

