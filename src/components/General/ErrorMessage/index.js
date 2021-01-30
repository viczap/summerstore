const ErrorMessage = ({message, closeHandler}) => {
    return message ? (
        <div className="alert alert-danger alert-dismissible fade show">
            <strong>Error!</strong> {message}
            <button type="button" className="close" data-dismiss="alert" onClick={closeHandler}>
                &times;
            </button>
        </div>
    ) : null;
};

export default ErrorMessage;
