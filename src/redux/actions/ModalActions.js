import modalConst from '../constants/ModalConst';
export default {
    openModal: () => ({ type: modalConst.OPEN }),
    closeModal: () => ({ type: modalConst.CLOSE}),
    toggleModal: () => ({ type: modalConst.TOGGLE})
}