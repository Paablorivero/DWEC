package com.decroly.backcarrito.model;

public class Libro
{
    private int id;
    private String titulo;
    private String autor;
    private int publicacion;
    private String genero;
    private double calificacion;
    private String resumen;
    private String imagen;

    public Libro(int id, String titulo, String autor, int publicacion, String genero, double calificacion, String resumen,
            String imagen) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.publicacion = publicacion;
        this.genero = genero;
        this.calificacion = calificacion;
        this.resumen = resumen;
        this.imagen = imagen;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getPublicacion() {
        return publicacion;
    }

    public void setPublicacion(int publicacion) {
        this.publicacion = publicacion;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public double getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(int calificacion) {
        this.calificacion = calificacion;
    }

    public String getResumen() {
        return resumen;
    }

    public void setResumen(String resumen) {
        this.resumen = resumen;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    

}
