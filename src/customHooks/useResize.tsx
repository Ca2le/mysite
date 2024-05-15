import { useEffect } from "react";
import { useAppDispatch } from "../redux/index.slices";
import { setSize } from "../redux/windowSize.slice";

const useResize = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const onResize = () => {
            requestAnimationFrame(() => {
                dispatch(setSize({ width: innerWidth, height: innerHeight })
                );
            })
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);


};

export default useResize;