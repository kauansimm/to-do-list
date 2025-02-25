import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type ObjType = {
  id: number;
  thumbUrl: string;
  url: string;
  title: string;
};

interface EditMovieProps {
    onClose: () => void;
    obj: ObjType | null;
    editarFilme: (id: number, filmeAtualizado: Partial<Omit<ObjType, "id">>) => Promise<void>;
  }
  
  export default function EditMovie({ onClose, obj, editarFilme }: EditMovieProps) {
  
    const [title, setTitle] = useState(obj?.title);
    const [url, setUrl] = useState(obj?.url);
    const [thumbUrl, setThumbUrl] = useState(obj?.thumbUrl);
  
    const handleEdit = async () => {
      await editarFilme(obj?.id ? obj.id : 0, { title, url, thumbUrl });
      onClose();
    };
  
    return (
      <Grid container xs={11} alignContent="start" gap={{ xs: 1.5, sm: 2, xl: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs>
            <Typography fontSize={{ xs: '1.5vw' }} component="strong">
              Editar filme
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ cursor: "pointer" }} onClick={onClose}>
            <ArrowBackIosIcon />
          </Grid>
        </Grid>
        <Grid container gap={1}>
          <Grid item xs={12}>
            <Typography>Título do filme:</Typography>
            <TextField 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Insira o título do filme" 
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Url:</Typography>
            <TextField 
              value={url} 
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Insira sua url" 
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Thumb:</Typography>
            <TextField 
              value={thumbUrl} 
              onChange={(e) => setThumbUrl(e.target.value)}
              placeholder="Insira sua thumb" 
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ width: "100%" }} onClick={handleEdit}>
            Editar
          </Button>
        </Grid>
      </Grid>
    );
  }
  
