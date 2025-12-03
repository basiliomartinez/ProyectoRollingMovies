import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import { Edit2, Plus } from "lucide-react";

const MovieFormModal = ({ movie, onClose, onSave, show }) => {
  const isEdit = useMemo(() => !!movie?.id, [movie]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (show) {
      reset({
        nombre: movie?.nombre || "",
        categoria: movie?.categoria || "",
        descripcion: movie?.descripcion || "",
        publicado: movie?.publicado ?? true, 
      });
    }
  }, [movie, show, reset]);

  const onSubmit = (data) => {
    onSave(movie?.id, data);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static" size="lg">
      <Modal.Header closeButton className="bg-light">
        <Modal.Title className="fw-bold text-dark">
          {isEdit ? (
            <>
              <Edit2 className="me-2" size={24} />
              Editar Contenido
            </>
          ) : (
            <>
              <Plus className="me-2" size={24} />
              Nuevo Contenido
            </>
          )}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={12}>
              <FloatingLabel label="Título" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Título"
                  {...register("nombre", { required: "El título es obligatorio." })}
                  isInvalid={!!errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombre?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FloatingLabel label="Categoría" className="mb-3">
                <Form.Select
                  {...register("categoria", {
                    required: "Seleccione una categoría.",
                  })}
                  isInvalid={!!errors.categoria}
                >
                  <option value="">Seleccionar...</option>
                  <option value="Acción">Acción</option>
                  <option value="Aventura">Aventura</option>
                  <option value="Comedia">Comedia</option>
                  <option value="Drama">Drama</option>
                  <option value="Ciencia Ficción">Ciencia Ficción</option>
                  <option value="Terror">Terror</option>
                  <option value="Documental">Documental</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.categoria?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>

          <FloatingLabel label="Descripción" className="mb-4">
            <Form.Control
              as="textarea"
              placeholder="Descripción"
              style={{ height: "120px" }}
              {...register("descripcion", {
                required: "La descripción es obligatoria.",
                minLength: {
                  value: 15,
                  message: "Mínimo 15 caracteres.",
                },
              })}
              isInvalid={!!errors.descripcion}
            />
            <Form.Control.Feedback type="invalid">
              {errors.descripcion?.message}
            </Form.Control.Feedback>
          </FloatingLabel>

          <Form.Check
            type="switch"
            id="publicado"
            label="¿Publicado?"
            className="mb-4"
            {...register("publicado")}
          />

          <div className="d-flex justify-content-end gap-2 pt-3 border-top">
            <Button variant="outline-danger" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" className="px-4 fw-bold">
              {isEdit ? "Guardar Cambios" : "Crear Contenido"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MovieFormModal;
