const Loading = (props) => {
    return (
        <>
            {
                props.show && (
                    <div className="absolute top-0 left-0 z-50 w-screen h-screen bg-black/50 flex justify-center items-center">
                        <div className="bg-base-200 w-20 h-20 flex justify-center items-center rounded-lg">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Loading;