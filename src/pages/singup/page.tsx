import { Button, Grid, TextField, Typography } from "@mui/material";
import NavBar from "../../components/content/nav-bar";
import ThemeSettings from "../../themes/themeSettings";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useFetch from "../../hooks/useFecth";
import { useState } from "react";
import useHandleNavigation from "../../hooks/useHandleNavigation";

export default function Page() {

    const { handleNavigationClick } = useHandleNavigation()

    useGSAP(() => {
        gsap.to(`.container-singup-animation`, {
            bottom: 0,
            delay: .3,
            duration: 1.5,
            ease: `power4.out`
        })
    })

    const { request, loading, error } = useFetch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isInvalid, setIsInvalid] = useState(false)
    const [isLogin, setIsLogin] = useState<boolean | null>(null)
    const [loginError, setLoginError] = useState(false);
    const [registrationError, setRegistrationError] = useState<string | null>(null);

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com)$/;
        return regex.test(email);
    };

    const handleSubmit = async () => {
        if (!validateEmail(email)) {
            setIsInvalid(true);
            return;
        }

        try {
            const result = await request("http://localhost:3002/users", "POST", { email, password });

            if (result) {
                handleNavigationClick("/todolist");
            }
        } catch (error) {
            if (error.status === 409) {
                setRegistrationError('E-mail já cadastrado.');
            } else {
                setRegistrationError('Erro ao cadastrar.');
            }
        }
    };

    const handleLogin = async () => {
        if (!validateEmail(email)) {
            setLoginError(true);
            return;
        }

        console.log("Tentando logar com:", { email, password });

        const result = await request("http://localhost:3002/login", "POST", { email, password });

        console.log("Resultado do login:", result);

        if (result) {
            handleNavigationClick("/todolist");
        } else {
            setLoginError(true);
        }
    };

    return (
        <Grid container alignContent={`start`} overflow={`hidden`}>
            <Grid container height={`15vh`}>
                <NavBar loginFunction={() => setIsLogin(true)} />
            </Grid>
            <Grid container >
                <Grid container height={`85vh`} justifyContent={`center`} gap={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall, xl: ThemeSettings.THEME_SPACING.small }} sx={{ background: `linear-gradient(to top, ${ThemeSettings.THEME_COLORS.primary}88 15%, transparent 100%)` }} alignContent={`center`}>
                    <Grid container display={!isLogin ? `flex` : `none`} xs={3.5} bgcolor={ThemeSettings.THEME_COLORS.white} className="container-singup-animation" position={`relative`} bottom={`-100%`} justifyContent={`center`} borderRadius={`10px`} paddingY={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall }} border={`1px solid ${ThemeSettings.THEME_COLORS.primary}`} boxShadow={`1px 6px 5px ${ThemeSettings.THEME_COLORS.black}88`} sx={{ willChange: `transform` }}>
                        <Grid container xs={11} justifyContent={`center`} gap={{ xs: ThemeSettings.THEME_SPACING.mini + 1, sm: ThemeSettings.THEME_SPACING.extraSmall + .5, xl: ThemeSettings.THEME_SPACING.verySmall }}>
                            <Grid container justifyContent={`center`}>
                                <Typography variant="h2">
                                    Cadastre-se
                                </Typography>
                            </Grid>
                            <Grid container xs={10} gap={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall }}>
                                <Grid container justifyContent={`center`}>
                                    <TextField placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Grid>
                                <Grid container justifyContent={`center`}>
                                    <TextField placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Grid>
                                {isInvalid || registrationError && (
                                    <Grid container justifyContent="center">
                                        <Typography fontSize={{ xs: `.7vw` }} color="red">{isInvalid ? `Insira um email válido! (@gmail.com ou @outlook.com)` : registrationError ? `Este usuário já existe.` : `Erro desconhecido`}</Typography>
                                    </Grid>
                                )}
                                <Grid container>
                                    <Button variant="contained" sx={{ width: `100%` }} onClick={handleSubmit}>
                                        {loading ? "Cadastrando..." : "Cadastrar"}
                                    </Button>
                                </Grid>
                                <Grid container justifyContent={`center`}>
                                    <Typography>
                                        Já possui uma conta?
                                        <Typography display={`inline`} onClick={() => setIsLogin(true)} component={`strong`} color={ThemeSettings.THEME_COLORS.primary} sx={{ cursor: `pointer`, opacity: .8, transition: `.3s`, '&:hover': { opacity: 1 } }}>
                                            { } Entrar
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container display={isLogin !== null && isLogin ? `flex` : `none`} xs={3.5} bgcolor={ThemeSettings.THEME_COLORS.white} className="container-singup-animation" position={`relative`} bottom={`-100%`} justifyContent={`center`} borderRadius={`10px`} paddingY={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall }} border={`1px solid ${ThemeSettings.THEME_COLORS.primary}`} boxShadow={`1px 6px 5px ${ThemeSettings.THEME_COLORS.black}88`} sx={{ willChange: `transform` }}>
                        <Grid container xs={11} justifyContent={`center`} gap={{ xs: ThemeSettings.THEME_SPACING.mini + 1, sm: ThemeSettings.THEME_SPACING.extraSmall + .5, xl: ThemeSettings.THEME_SPACING.verySmall }}>
                            <Grid container justifyContent={`center`}>
                                <Typography variant="h2">
                                    Entrar
                                </Typography>
                            </Grid>
                            <Grid container xs={10} gap={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall }}>
                                <Grid container justifyContent={`center`}>
                                    <TextField placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Grid>
                                <Grid container justifyContent={`center`}>
                                    <TextField placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Grid>
                                {loginError && (
                                    <Grid container justifyContent="center">
                                        <Typography fontSize={{ xs: `.7vw` }} color="red">Email ou senha inválidos!</Typography>
                                    </Grid>
                                )}
                                <Grid container>
                                    <Button variant="contained" sx={{ width: `100%` }} onClick={handleLogin}>
                                        Entrar
                                    </Button>
                                </Grid>
                                <Grid container justifyContent={`center`}>
                                    <Typography>
                                        Não possui uma conta?
                                        <Typography display={`inline`} onClick={() => setIsLogin(false)} component={`strong`} color={ThemeSettings.THEME_COLORS.primary} sx={{ cursor: `pointer`, opacity: .8, transition: `.3s`, '&:hover': { opacity: 1 } }}>
                                            { } Cadastrar-se
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}