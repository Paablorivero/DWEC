package com.decroly.backcarrito.model;

import java.util.ArrayList;
import java.util.List;

public class Shop
{
    private String currency;
    private List<Libro> libros;

    public Shop(String currency) {
        this.currency = currency;
        this.libros = new ArrayList<>();

        // Inserto productos en la tienda
        this.libros.add(new Libro(1, "Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico", 9.5, "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.", "https://images-na.ssl-images-amazon.com/images/I/91TvVQS7loL.jpg"));
        
        this.libros.add(new Libro(2, "1984", "George Orwell", 1949, "Ciencia ficción/Distopía", 9.3, "Una oscura visión del futuro donde el Gran Hermano todo lo controla y la libertad individual ha desaparecido.", "https://m.media-amazon.com/images/I/71rpa1-kyvL._SY522_.jpg"));
        
        this.libros.add(new Libro(3, "El Principito", "Antoine de Saint-Exupéry", 1943, "Infantil/Filosófico", 9.0, "Un pequeño príncipe viaja de planeta en planeta haciendo preguntas que llegan al corazón sobre el amor y la amistad.", "https://m.media-amazon.com/images/I/711MY86KW9L._AC_UF1000,1000_QL80_.jpg"));
        
        this.libros.add(new Libro(4, "Don Quijote de la Mancha", "Miguel de Cervantes", 1605, "Novela/Clásico", 9.4, "Las aventuras de un hidalgo que pierde la razón y decide hacerse caballero andante.", "https://www.elejandria.com/covers/Don_Quijote_de_la_Mancha-Cervantes_Miguel-lg.png"));
        
        this.libros.add(new Libro(5, "Harry Potter y la piedra filosofal", "J.K. Rowling", 1997, "Fantasía/Juvenil", 8.8, "Un niño descubre que es un mago y comienza sus estudios en Hogwarts, la escuela de magia.", "https://m.media-amazon.com/images/I/81iqZ2HHD-L._SY522_.jpg"));
        
        this.libros.add(new Libro(6, "El señor de los anillos", "J.R.R. Tolkien", 1954, "Fantasía épica", 9.2, "Frodo debe destruir un anillo maligno en las tierras de Mordor para salvar la Tierra Media.", "https://0.academia-photos.com/attachment_thumbnails/54806472/mini_magick20190115-25903-11tupou.png?1547618110"));
        
        this.libros.add(new Libro(7, "Orgullo y prejuicio", "Jane Austen", 1813, "Romance/Clásico", 8.7, "Elizabeth Bennet y Mr. Darcy superan sus diferencias y prejuicios para encontrar el amor.", "https://m.media-amazon.com/images/I/71Q1tPupKjL._SY522_.jpg"));
        
        this.libros.add(new Libro(8, "Crimen y castigo", "Fiódor Dostoyevski", 1866, "Novela psicológica", 9.1, "Un estudiante comete un asesinato y lucha con las consecuencias psicológicas de su crimen.", "https://m.media-amazon.com/images/I/71O2XIytdqL._SY522_.jpg"));
        
        this.libros.add(new Libro(9, "El código Da Vinci", "Dan Brown", 2003, "Thriller/Misterio", 7.8, "Un profesor de simbología descubre pistas que podrían revelar uno de los mayores misterios de la historia.", "https://m.media-amazon.com/images/I/71PR0C4XNjL._AC_UF1000,1000_QL80_.jpg"));
        
        this.libros.add(new Libro(10, "Los juegos del hambre", "Suzanne Collins", 2008, "Ciencia ficción/Distopía", 8.3, "Katniss debe sobrevivir en un brutal reality show donde solo puede quedar un ganador.", "https://m.media-amazon.com/images/I/719PUKRXxaL._AC_UF1000,1000_QL80_.jpg"));
        
        this.libros.add(new Libro(11, "La sombra del viento", "Carlos Ruiz Zafón", 2001, "Misterio/Gótico", 8.9, "Un joven descubre un libro maldito y se ve envuelto en los misterios del Barcelona de posguerra.", "https://m.media-amazon.com/images/I/61ZSuWFzQRL.jpg"));
        
        this.libros.add(new Libro(12, "El nombre del viento", "Patrick Rothfuss", 2007, "Fantasía épica", 9.0, "Kvothe narra su ascenso de huérfano a mago legendario en una historia épica.", "https://m.media-amazon.com/images/I/91PjnllfsxL._AC_UF1000,1000_QL80_.jpg"));
        
        this.libros.add(new Libro(13, "Crepúsculo", "Stephenie Meyer", 2005, "Romance/Fantasía", 7.2, "Bella se enamora de Edward, un vampiro que lucha contra su naturaleza por protegerla.", "https://m.media-amazon.com/images/I/71V3mJ0sp9L.jpg"));
        
        this.libros.add(new Libro(14, "El hobbit", "J.R.R. Tolkien", 1937, "Fantasía/Aventura", 8.8, "Bilbo Bolsón se une a un grupo de enanos en una aventura para recuperar un tesoro custodiado por un dragón.", "https://m.media-amazon.com/images/I/710+HcoP38L._SY522_.jpg"));
        
        this.libros.add(new Libro(15, "Canción de hielo y fuego: Juego de tronos", "George R.R. Martin", 1996, "Fantasía épica", 9.1, "Familias nobles luchan por el control del Trono de Hierro en un mundo de intrigas y magia.", "https://m.media-amazon.com/images/I/91dSMhdIzTL._SY522_.jpg"));
        
        this.libros.add(new Libro(16, "El alquimista", "Paulo Coelho", 1988, "Ficción/Filosofía", 8.2, "Un joven pastor andaluz viaja a Egipto en busca de un tesoro soñado y encuentra su leyenda personal.", "https://m.media-amazon.com/images/I/71aFt4+OTOL._SY522_.jpg"));
        
        this.libros.add(new Libro(17, "La casa de los espíritus", "Isabel Allende", 1982, "Realismo mágico", 8.6, "La saga de la familia Trueba a través de cuatro generaciones en un país sudamericano.", "https://m.media-amazon.com/images/I/81y20kvHiWS.jpg"));
        
        this.libros.add(new Libro(18, "Matar a un ruiseñor", "Harper Lee", 1960, "Drama/Clásico", 8.9, "Una niña aprende sobre justicia y prejuicio racial en el sur de Estados Unidos durante la Gran Depresión.", "https://m.media-amazon.com/images/I/71ScCUdhhQL._AC_UF1000,1000_QL80_.jpg"));
        
        this.libros.add(new Libro(19, "El gran Gatsby", "F. Scott Fitzgerald", 1925, "Drama/Clásico", 8.5, "La historia de Jay Gatsby y su amor imposible por Daisy Buchanan en los locos años veinte.", "https://archive.org/services/img/elgrangatsby0000fitz_y8k4/full/pct:200/0/default.jpg"));
        
        this.libros.add(new Libro(20, "It (Eso)", "Stephen King", 1986, "Terror/Suspense", 8.7, "Un grupo de niños enfrenta a una entidad malvada que adopta la forma de un payaso llamado Pennywise.", "https://m.media-amazon.com/images/I/81HKMoh8m0L._UF1000,1000_QL80_.jpg"));
        
        this.libros.add(new Libro(21, "El retrato de Dorian Gray", "Oscar Wilde", 1890, "Gótico/Filosófico", 8.8, "Un joven desea que un retrato envejezca en su lugar mientras él permanece eternamente joven.", "https://imagessl6.casadellibro.com/a/l/s5/36/9788467032536.webp"));
        
        this.libros.add(new Libro(22, "La metamorfosis", "Franz Kafka", 1915, "Ficción/Existencialismo", 8.4, "Gregor Samsa despierta una mañana convertido en un enorme insecto.", "https://www.elejandria.com/covers/La_Metamorfosis-Kafka_Franz-lg.png"));
        
        this.libros.add(new Libro(23, "El guardián entre el centeno", "J.D. Salinger", 1951, "Drama/Coming-of-age", 8.3, "Holden Caulfield narra sus experiencias en Nueva York tras ser expulsado de su escuela.", "https://m.media-amazon.com/images/I/81OthjkJBuL._SY522_.jpg"));
        
        this.libros.add(new Libro(24, "Rayuela", "Julio Cortázar", 1963, "Novela experimental", 8.6, "Una novela antinovela que puede leerse en diferentes órdenes, explorando la vida de Horacio Oliveira.", "https://upload.wikimedia.org/wikipedia/commons/c/ca/Rayuela_JC.png"));
        
        this.libros.add(new Libro(25, "Pedro Páramo", "Juan Rulfo", 1955, "Realismo mágico", 8.9, "Juan Preciado viaja a Comala para buscar a su padre y encuentra un pueblo habitado por fantasmas.", "https://upload.wikimedia.org/wikipedia/commons/d/d6/Pedro_P%C3%A1ramo.jpg"));
    }

    public String getCurrency()
    {
        return currency;
    }

    public List<Libro> getLibros()
    {
        return libros;
    }
}
