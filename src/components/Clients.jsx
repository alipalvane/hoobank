import { clients } from "../constants";
import styles from "../styles";
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[190px]`}>
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:[192px] w-[190px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
