import { loginFailure, loginStart, loginSuccess } from "./reduxUser";
import { publicRequest } from "../Request";

export const login = async (dispatch, user) =>
{
    dispatch(loginStart());
    try
    {
        const response = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(response.data));
    } catch (err)
    {
        dispatch(loginFailure());
    }
};