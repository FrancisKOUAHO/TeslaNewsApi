import jwt from "jsonwebtoken"

const auth = (req: { headers: { authorization: string; }; userData: string | jwt.JwtPayload; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; }, next: () => void) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");

        const decoded = jwt.verify(token, "secret");
        req.userData = decoded;

        next();
    } catch (err) {
        return res.status(401).json({
            message: "Échec de l'authentification"
        });
    }
};


export { auth };
