const BACKGROUND_IMAGE_NAME = "bg.webp";

const styles = {
    container: {
        backgroundImage: `url(images/${BACKGROUND_IMAGE_NAME})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "absolute" as "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        filter: "blur(7px)",
        transform: "scale(1.1)",
    },
};

export const BackgroundImage = () => {
    return <div style={styles.container} />;
};
