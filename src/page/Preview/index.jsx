/* eslint-disable react/no-unescaped-entities */
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { PiClock } from "react-icons/pi";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { GoBack } from "../../components/GoBack";
import { Tag } from "../../components/Tag";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";

export function Preview() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");

  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      const userResponse = await api.get(`/users/${response.data.user_id}`);

      setData(response.data);

      setUsername(userResponse.data.user.name);
    }

    fetchMovie();
  }, [params.id]);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <GoBack haveicon to="/" title="Voltar" />

          <div className="col-2">
            <h1>{data.title}</h1>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, index) => {
                return index < data.score ? (
                  <IoIosStar key={index} />
                ) : (
                  <IoIosStarOutline key={index} />
                );
              })}
            </div>
          </div>

          <div className="col-2">
            <div className="user">
              <img
                src="https://github.com/ishugodev.png"
                alt="Foto do usuário"
              />
              <span>
                Por&nbsp;
                {username}
              </span>
            </div>

            <div className="date">
              <PiClock />
              <span>{data.updated_at}</span>
            </div>
          </div>

          {data.tags && (
            <div className="tagGroup">
              {data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </div>
          )}

          <p>{data.observation}</p>
        </main>
      )}
    </Container>
  );
}
