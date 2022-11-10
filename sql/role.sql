-- 1. Utwórz użytkownika u1  z hasłem abcd
CREATE USER u1 IDENTIFIED by 'abcd';
-- 2. Utwórz bazę danych b i wykonaj do niej plik komis.sql (metodą przekierowania) 
create database b;
use b;
source C:\xampp\htdocs\4eG_1\komis.sql
-- 3. Użytkownikowi u1 nadaj prawo do efektywnego wstawiania, usuwania i modyfikowania danych dla tabeli samochody.
GRANT SELECT, INSERT, DELETE, UPDATE ON b.samochody TO u1;

-- 4. Użytkownikowi u1 odbierz prawo do usuwania danych w tabeli samochody
    revoke delete on b.samochody from u1;
-- 5. utwórz rolę r1 z prawami do wyświetlania danych z wszystkich tabel bazy b
create role r1;
GRANT select on b.* to r1;
-- 6. Użytkownikowi u1 przypisz prawo do roli r1
GRANT r1 to 'u1';
-- 7. zaloguj się jako u1 i sprawdź uprawniania (show grants)
mysql -u u1 -p 
show grants;
--        8. Sprawdź, czy możesz wyświetlić dane z tabeli zamowienia

--        9. włącz (ustaw) rolę r1
SET role r1;
--        10. sprawdź, czy możesz wyświetlić dane z tabeli zamowienia
select * from zamowienia;
--         11. sprawdź, czy możesz usunąć zamowienie o id 3
            DELETE FROM zamowienia
            WHERE id=3;
-- 12. do roli r1 dodaj prawo do usuwania danych z tabeli zamowienia
grant delete on b.zamowienia to r1;

--          13. sprawdź uprawnienia
show grants; 

--          14. usuń zamówienie o id 2
SET role r1
DELETE FROM zamowienia 
WHERE id = 2;
-- 15. usuń rolę r1
drop role r1;

-- 16. usuń użytkownika u1
drop user u1;