const db = require('../db/database');
// const roles = require('../enums/roles')
const departments = require('../enums/departments')
const getALLEmployees = (req, res) => {

    db.all('SELECT * FROM employee ORDER BY id DESC', [], (err, rows) => {
        if (err) return res.status(500).json({
            error: 'Dabase error'
        });
        res.json(rows);

    });
};

const getEmployeeById = (req, res) => {
    db.get('SELECT * FROM employee WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: 'Database error' })
        if (!row) return res.status(404).json({ error: 'Employee not found' })
        res.json(row);
    });

};

const createEmployee = (req, res) => {
    const { name, email, department, role, phone_number } = req.body || {};
    if (!name) {
        return res.status(400).json({ error: "name is required!" });

    }
    if (!email) {
        return res.status(400).json({ error: "Email is required!" })
    }
    if (!role) {
        return res.status(400).json({ error: "Role is required!" })
    }
    if (!departments.includes(department)) {
        return res.status(400).json({ error: 'Invalid department!' });
    }
    db.run(
        'INSERT INTO employee(name,email,department,role,phone_number) VALUES(?,?,?,?,?)',
        [name, email, department, role, phone_number],
        function (err) {
            if (err) {
                if (err.message.includes('UNIQUE')) {
                    return res.status(409).json({ error: 'Email already exists' });

                }
                return res.status(500).json({ error: 'Database error' });
            }
            return res.status(201).json({ id: this.lastID, name, email, department, role });
        }
    )

}

const updateEmployee = (req, res) => {
    const { name, email, role, department, phone_number } = req.body || {};
    const { id } = req.params;
    if (department && !departments.includes(department)) {
        return res.status(400).json({ error: 'Invalid department!' });
    }
    if (!role) {
        return res.status(400).json({ error: 'Invalid role!' });
    }
    db.get('SELECT * FROM employee WHERE id=?', [id], (err, existing) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        // if (!existing) return res.status(404).json({ error: 'Employee not found!' });


        db.run(
            'Update employee SET name = ?,email = ?,department =?,updated_at=CURRENT_DATE, role =?,phone_number=? WHERE id =?',
            [
                name ?? existing.name,
                email ?? existing.email,
                department ?? existing.department,
                role ?? existing.role,
                phone_number ?? existing.phone_number,
                id

            ],
            function (err) {
                if (err) {
                    if (err.message.includes('UNIQUE')) {

                        return res.status(409).json({ error: 'Email Already exist' })

                    }
                    console.log(err.message);
                    return res.status(500).json({ error: 'Database error' })

                }

                res.json({
                    id: Number(id),
                    name: name ?? existing.name,
                    email: email ?? existing.email,
                    department: department ?? existing.department,
                    role: role ?? existing.role,
                    phone_number: phone_number ?? existing.phone_number,

                })

            }

        )

    });
}


const deleteEmployee = (req, res) => {
    db.run(
        'DELETE FROM EMPLOYEE WHERE id =?',
        [req.params.id],
        function (err) {
            if (err) return res.status(500).json(
            {
              error: 'Database error'
            });
            if (!this.changes) return res.status(404).json({
                error: 'Employee not Found'
            });
            res.json({ message: 'Employee delete' })
        }
    )
}










module.exports = { getALLEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee }
