
--
-- Database: `dbProjet`
--

-- --------------------------------------------------------

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `titre_article`, `contenu_article`, `photo_article`) VALUES
(2, 'Soigner sa barbe', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut esse ex illum libero minus nulla quidem similique sunt voluptas! Commodi fuga ipsum quam voluptatum! At cupiditate itaque maiores odit similique?\r\n\r\nAmet blanditiis commodi delectus deleniti dignissimos ducimus ea, eos eveniet id impedit inventore magnam modi nemo neque nesciunt optio placeat, quaerat, quia quos rerum sapiente sed sequi voluptate? Adipisci, autem!\r\n\r\nAsperiores harum in molestias nihil perspiciatis placeat porro! Ab aliquid assumenda at atque consectetur, distinctio dolores ducimus eaque eum explicabo fuga modi nesciunt nihil possimus quidem, sed sint sunt, voluptates.\r\n\r\nAperiam consequatur culpa deleniti, dicta, dolorem doloribus ducimus est fuga labore maxime nihil officia perspiciatis qui reprehenderit sapiente sit suscipit temporibus ullam. Enim eos hic ipsam perspiciatis, provident quo tempora!', 'soinBarbe.jpg'),
(3, 'Elégance à l\'ancienne', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut esse ex illum libero minus nulla quidem similique sunt voluptas! Commodi fuga ipsum quam voluptatum! At cupiditate itaque maiores odit similique?\r\n\r\nAmet blanditiis commodi delectus deleniti dignissimos ducimus ea, eos eveniet id impedit inventore magnam modi nemo neque nesciunt optio placeat, quaerat, quia quos rerum sapiente sed sequi voluptate? Adipisci, autem!\r\n\r\nAsperiores harum in molestias nihil perspiciatis placeat porro! Ab aliquid assumenda at atque consectetur, distinctio dolores ducimus eaque eum explicabo fuga modi nesciunt nihil possimus quidem, sed sint sunt, voluptates.\r\n\r\nAperiam consequatur culpa deleniti, dicta, dolorem doloribus ducimus est fuga labore maxime nihil officia perspiciatis qui reprehenderit sapiente sit suscipit temporibus ullam. Enim eos hic ipsam perspiciatis, provident quo tempora!', 'oldStyle.jpg'),
(4, 'Boucles rebelles', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut esse ex illum libero minus nulla quidem similique sunt voluptas! Commodi fuga ipsum quam voluptatum! At cupiditate itaque maiores odit similique?\r\n\r\nAmet blanditiis commodi delectus deleniti dignissimos ducimus ea, eos eveniet id impedit inventore magnam modi nemo neque nesciunt optio placeat, quaerat, quia quos rerum sapiente sed sequi voluptate? Adipisci, autem!\r\n\r\nAsperiores harum in molestias nihil perspiciatis placeat porro! Ab aliquid assumenda at atque consectetur, distinctio dolores ducimus eaque eum explicabo fuga modi nesciunt nihil possimus quidem, sed sint sunt, voluptates.\r\n\r\nAperiam consequatur culpa deleniti, dicta, dolorem doloribus ducimus est fuga labore maxime nihil officia perspiciatis qui reprehenderit sapiente sit suscipit temporibus ullam. Enim eos hic ipsam perspiciatis, provident quo tempora!', 'curlyHair.jpg'),
(5, 'Parfaite barbe de trois jours', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut esse ex illum libero minus nulla quidem similique sunt voluptas! Commodi fuga ipsum quam voluptatum! At cupiditate itaque maiores odit similique?\r\n\r\nAmet blanditiis commodi delectus deleniti dignissimos ducimus ea, eos eveniet id impedit inventore magnam modi nemo neque nesciunt optio placeat, quaerat, quia quos rerum sapiente sed sequi voluptate? Adipisci, autem!\r\n\r\nAsperiores harum in molestias nihil perspiciatis placeat porro! Ab aliquid assumenda at atque consectetur, distinctio dolores ducimus eaque eum explicabo fuga modi nesciunt nihil possimus quidem, sed sint sunt, voluptates.\r\n\r\nAperiam consequatur culpa deleniti, dicta, dolorem doloribus ducimus est fuga labore maxime nihil officia perspiciatis qui reprehenderit sapiente sit suscipit temporibus ullam. Enim eos hic ipsam perspiciatis, provident quo tempora!', 'barbeCourte.jpg');


-- --------------------------------------------------------

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`id`, `code_package`, `prix_package`) VALUES
(1, 1, 30),
(2, 2, 70),
(3, 3, 80);

-- --------------------------------------------------------

--
-- Dumping data for table `produit`
--

INSERT INTO `produit` (`id`, `nom_produit`, `photo_produit`, `prix_produit`) VALUES
(1, 'Shampoing cheveux et barbe', 'shampoing.jpg', 30),
(2, 'Mousse à raser', 'mousse.jpg', 25),
(3, 'Cire', 'cire.jpg', 35),
(4, 'Huile Barbe', 'huileBarbe.jpg', 20),
(5, 'Blaireau', 'blaireau.jpg', 10),
(6, 'Rasoir', 'rasoir.jpg', 20);

-- --------------------------------------------------------

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `nom_service`, `prix_service`) VALUES
(1, 'shampoing', 20),
(2, 'coupe', 40),
(3, 'moustache', 30),
(4, 'barbe', 50),
(5, 'coiffage', 30);

-- --------------------------------------------------------

--
-- Dumping data for table `service_package`
--

INSERT INTO `service_package` (`service_id`, `package_id`) VALUES
(1, 1),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(4, 2),
(4, 3),
(5, 1);

-- --------------------------------------------------------

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `roles`) VALUES
(1, 'admin', '$argon2id$v=19$m=65536,t=4,p=1$hInyJ/IMFUzWvYOTMexMIQ$JhIvbx63LHOC6VtBVl8KpxIkJnUL5Pgb3FrQOHSb/Zc', '[]');


