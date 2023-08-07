
export default function Alert(props: AlertProps) {
    const toggleAlert: () => void = () => {
        props.toggleAlert(false);
    };
    return (
        <div id="liveAlertPlaceholder">
            <div className={`alert alert-${props.variant} alert-dismissible`} role="alert">
                <div>{props.message}</div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    onClick={toggleAlert}></button>
            </div>
        </div>
    )
}

type AlertProps = {
    variant: string;
    message: string;
    toggleAlert: (val: boolean) => void;
};
