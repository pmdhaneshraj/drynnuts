import { faDeleteLeft, faMinus, faMultiply, faPlus, faTrashCan, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Checkout.module.scss';

export const TABLE_COLUMNS = ({ onClick }) => [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Product'
  },
  {
    key: 'weight',
    dataIndex: 'weight',
    title: 'Weight',
    render: (value, record) => record?.id ? <span>{value}g</span> : null
  },
  {
    key: 'quantity',
    dataIndex: 'count',
    title: 'Quantity',
    align: 'center',
    render: (value, record) => record.id ? <span>
      <FontAwesomeIcon className={styles.icon} icon={value === 1 ? faTrashCan : faMinus} onClick={() => onClick(-1, record)} />
      {value}
      {value < 10
        ? <FontAwesomeIcon className={styles.icon} icon={faPlus} onClick={() => onClick(1, record)} />
        : <span style={{ margin: '0 1rem', padding: '0 1rem' }}></span>}
    </span> : <h4 style={{ margin: '0' }}>Total</h4>
  },
  {
    key: 'price',
    dataIndex: 'price',
    title: 'Price',
    align: 'right',
    render: (value, record) => <span>{record.count * value}</span>
  }
]