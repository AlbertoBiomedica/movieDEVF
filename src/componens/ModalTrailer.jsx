import Modal from 'react-bootstrap/Modal';
import Youtube from 'react-youtube'


// eslint-disable-next-line react/prop-types
const Trailer = ({ show, handleClose, keyVideo, nameVideo }) => {

    return (

        <>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{nameVideo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Youtube
                        videoId={keyVideo}
                        className={"youtube amru videoMovie"}
                        containerClassName={"youtube-container amru"}
                        opts={
                            {
                                width: '100%',
                                height: '100%',
                                playerVars: {
                                    autoplay: 1,
                                    controls: 0,
                                    cc_load_policy: 0,
                                    fs: 0,
                                    iv_load_policy: 0,
                                    modestbranding: 0,
                                    rel: 0,
                                    showinfo: 0,
                                },
                            }
                        }
                    />

                </Modal.Body>
                
            </Modal>
        </>
    )
}

export default Trailer;