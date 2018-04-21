import React from 'react';
import { hideUpdatePasswordSuccessModal } from '../../../actions/redux-auth/ui';
import Modal from './Modal';

class UpdatePasswordSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass='update-password-success-modal'
        closeAction={hideUpdatePasswordSuccessModal}
        title='Success'>
        <p>Your password has been successfully changed.</p>
      </Modal>
    );
  }
}

export default UpdatePasswordSuccessModal;