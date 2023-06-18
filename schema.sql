CREATE TABLE compounds1s(
    id integer ,
    compoundName varchar(1055),
    compoundDescription varchar(1055) ,
    imgSource varchar(1055),
    imgAttribution varchar(1055),
    dateModified varchar(255)  
);
Load data Local infile 'C:/Users/Divianshu Jaswal/Downloads/compound.csv'
into TABLE compounds1s
fields terminated by ','
optionally enclosed by '"' 
lines terminated by '\r\n'
ignore 1 lines;