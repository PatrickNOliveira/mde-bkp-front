import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function alerta({title, message, onYes, onNo}) {
    confirmAlert({
        title: title,
        message: message,
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
                 if (onYes) onYes();
            }
          },{
            label: 'Não',
            onClick: () =>{
                if (onNo) onNo();
            }
          }
        ]
      });
}