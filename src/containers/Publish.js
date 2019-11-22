import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDropzone } from 'react-dropzone'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

function Previews(props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      props.setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = props.files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    props.files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [props.files]);

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}


const Announce = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [textAnnounce, setTextAnnounce] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState("");
  const [files, setFiles] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    files.map((file, idx) => {
      return formData.append("files[" + idx + "]", file);
    })
    // for (let i = 0; i < files.length; i++) {
    //   formData.append("files[" + i + "]", files[i]);
    // }
    // console.log(formData);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", textAnnounce);
    formData.append("token", props.token);

    try {
      const response = await axios.post("http://localhost:4000/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + props.token,
            "content-type": "multipart/form-data"
          }
        }
      )
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="announce-page">
      <div className="wrapper-announce">
        <div className="announce-info">
          <form onSubmit={onSubmit}>
            <h1>Déposer une annonce</h1>
            <h2>Titre de l'annonce</h2>
            <input type="text" value={title} onChange={(event) =>
              setTitle(event.target.value)} />
            <label>
              <h2>Texte de l'annonce</h2>
              <textarea value={textAnnounce} onChange={(event) => {
                setTextAnnounce(event.target.value)
              }} />
            </label>
            <h2>Price</h2>
            <input className="number" type="text" pattern="[0-9]*" value={price} onChange={(event) => {
              {
                event.target.validity.valid &&
                  setPrice(event.target.value)

              }
            }} />€
            <h2>Photos</h2>
            <Previews files={files} setFiles={setFiles} />
            {/* <input type="file" onChange={(event) => {
              setPicture(event.target.files[0]);
            }} /> */}
            <div>
              <button>Valider</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Announce;